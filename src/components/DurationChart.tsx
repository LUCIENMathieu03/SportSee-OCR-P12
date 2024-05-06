import '../styles/sass/components/durationChart.scss'
import {
    LineChart,
    Line,
    XAxis,
    ResponsiveContainer,
    Tooltip,
    YAxis,
    Legend,
    Rectangle,
} from 'recharts'

type DurationChartType = {
    userSessions: {
        day: number
        sessionLength: number
    }[]
}

type customLineTooltipType = {
    active: boolean
    payload: { value: string }[]
}

type CustomLineCursorType = {
    points?: { x: number }[]
    width?: number
}

type CustomizedActiveDotType = {
    cx?: number
    cy?: number
}

const CustomLineTooltip = ({ active, payload }: customLineTooltipType) => {
    if (active && payload && payload.length)
        return (
            <div className="durationChart__tooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        )
}

const customLegend = () => {
    return (
        <p className="durationChart__legend">
            Durée moyenne des
            <br />
            sessions
        </p>
    )
}

const CustomLineCursor = (props: CustomLineCursorType) => {
    const { points, width } = props
    if (points && width) {
        const { x } = points[0]

        return (
            <Rectangle
                fill={'#000000'}
                fillOpacity="0.2"
                x={x}
                y={0}
                width={width + 20}
                height={263}
            />
        )
    }
}

const CustomizedActiveDot = (props?: CustomizedActiveDotType) => {
    if (props) {
        const { cx = 0, cy = 0 } = props

        return (
            <svg
                x={cx - 10}
                y={cy - 10}
                width={20}
                height={20}
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z"
                    fill="white"
                />
                <path
                    d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z"
                    stroke="white"
                    strokeOpacity="0.198345"
                    strokeWidth="5"
                />
            </svg>
        )
    }
}

function DurationChart({ userSessions }: DurationChartType) {
    const days: string[] = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

    return (
        <div className="durationChart">
            <ResponsiveContainer width="100%">
                <LineChart
                    data={[
                        userSessions[0],
                        ...userSessions,
                        userSessions[userSessions.length - 1], //Create value so that the line sticks to the border
                    ]}
                >
                    <defs>
                        <linearGradient
                            id="gradientColor"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="40%"
                                stopColor="rgba(255, 255, 255, 0.5)"
                            />

                            <stop
                                offset="100%"
                                stopColor="rgba(255, 255, 255, 1)"
                            />
                        </linearGradient>
                    </defs>

                    <Legend
                        formatter={customLegend}
                        align="left"
                        verticalAlign="top"
                        iconSize={0}
                    />

                    <XAxis
                        dataKey={() => days}
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            style: {
                                fill: '#fff',
                                opacity: '.5',
                                fontSize: '12px',
                            },
                        }}
                        padding={{ left: -15, right: -15 }}
                    />

                    <YAxis
                        dataKey="sessionLength"
                        hide={true}
                        domain={['dataMin - 20', 'dataMax + 20']}
                    />

                    <Tooltip
                        content={
                            <CustomLineTooltip active={false} payload={[]} />
                        }
                        cursor={<CustomLineCursor />}
                    />

                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#gradientColor)"
                        strokeWidth={2}
                        dot={false}
                        // activeDot={{
                        //     stroke: '#FFFFFF',
                        //     strokeWidth: 8,
                        // }}
                        activeDot={<CustomizedActiveDot />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DurationChart
