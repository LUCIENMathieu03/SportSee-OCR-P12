import '../styles/sass/components/activityChart.scss'
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from 'recharts'

type Payload = {
    value: string
}

type CustomTooltipType = {
    active: string
    payload: Payload[]
}

type RenderLegendType = {
    payload: Payload[]
}

type BarChartType = {
    userActivity: {
        day: string
        kilogram: number
        calories: number
    }[]
}

const CustomTooltip = ({ active, payload }: CustomTooltipType) => {
    console.log
    if (active && payload && payload.length) {
        return (
            <div className="activityChart__customizedTooltip">
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kcal`}</p>
            </div>
        )
    }

    return null
}

const RenderLegend = ({ payload }: RenderLegendType) => {
    const colors = ['first', 'second']

    return (
        <div className="activityChart__customizedLegend">
            <p className="activityChart__customizedLegend__title">
                Activité quotidienne
            </p>
            <ul className="activityChart__customizedLegend__legendList">
                {payload.map((entry: { value: string }, index: number) => (
                    <li key={`item-${index}`}>
                        <div
                            className={`activityChart__customizedLegend__legendList--${colors[index]}`}
                        ></div>
                        <span className="mx-2">
                            {entry.value === 'kilogram'
                                ? 'Poids (kg)'
                                : 'Calories brûlées (kcal)'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function ActivityChart({ userActivity }: BarChartType) {
    const xAxisValues = () =>
        userActivity.map((activity) => userActivity.indexOf(activity) + 1)

    return (
        <div className="activityChart">
            <ResponsiveContainer width="100%">
                <BarChart data={userActivity} barGap={8} barSize={10}>
                    <CartesianGrid strokeDasharray="3" vertical={false} />

                    <XAxis
                        dataKey={xAxisValues}
                        axisLine={{ stroke: '#DEDEDE' }}
                        tickLine={false}
                        tick={{
                            fill: '#9B9EAC',
                            fontSize: 15,
                            fontFamily: 'Roboto',
                            fontWeight: '500',
                        }}
                        tickMargin={16}
                        padding={{ left: -45, right: -45 }}
                    />
                    <YAxis
                        yAxisId="kg"
                        type="number"
                        dataKey={'kilogram'}
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: '#9B9EAC',
                            fontSize: 15,
                            fontFamily: 'Roboto',
                            fontWeight: '500',
                        }}
                        width={70}
                        tickMargin={43}
                        //This code:
                        // domain={['dataMin-10', 'dataMax+20']}
                        // tickCount={4}
                        //Or this one :
                        tickCount={3}
                    />
                    <YAxis yAxisId="cal" dataKey="calories" hide={true} />
                    <Tooltip
                        content={<CustomTooltip active={''} payload={[]} />}
                        cursor={{ fill: '#C4C4C480' }}
                    />
                    <Legend
                        verticalAlign="top"
                        height={65}
                        content={<RenderLegend payload={[]} />}
                    />
                    <Bar
                        yAxisId="kg"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[20, 20, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[20, 20, 0, 0]}
                        yAxisId="cal"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ActivityChart
