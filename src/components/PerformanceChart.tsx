import '../styles/sass/components/performanceChart.scss'
import {
    ResponsiveContainer,
    RadarChart,
    Radar,
    PolarAngleAxis,
    PolarGrid,
    Text,
} from 'recharts'

type PerformanceChartType = {
    userPerformance: {
        kind: {
            '1': string
            '2': string
            '3': string
            '4': string
            '5': string
            '6': string
        }
        data: { value: number; kind: number }[]
    }
}

type NewData = { value: number; kind: string }[]

type Elem = { value: number; kind: string }

type TmpElemKindType = '1' | '2' | '3' | '4' | '5' | '6'

type CustomedLabels = {
    payload: { value: string }
    x: number
    y: number
    cx: number
    cy: number
}

function PerformanceChart({ userPerformance }: PerformanceChartType) {
    const refactoredData = () => {
        const newData: NewData = []
        let tmpElemKind: TmpElemKindType
        let newKind: string

        userPerformance.data.map((elem) => {
            switch (elem.kind) {
                case 1:
                    tmpElemKind = '1'
                    userPerformance.kind[tmpElemKind] === 'cardio'
                        ? (newKind = 'Cardio')
                        : (newKind = userPerformance.kind[tmpElemKind])
                    break
                case 2:
                    tmpElemKind = '2'
                    userPerformance.kind[tmpElemKind] === 'energy'
                        ? (newKind = 'Energie')
                        : (newKind = userPerformance.kind[tmpElemKind])
                    break
                case 3:
                    tmpElemKind = '3'
                    userPerformance.kind[tmpElemKind] === 'endurance'
                        ? (newKind = 'Endurance')
                        : (newKind = userPerformance.kind[tmpElemKind])
                    break
                case 4:
                    tmpElemKind = '4'
                    userPerformance.kind[tmpElemKind] === 'strength'
                        ? (newKind = 'Force')
                        : (newKind = userPerformance.kind[tmpElemKind])
                    break
                case 5:
                    tmpElemKind = '5'
                    userPerformance.kind[tmpElemKind] === 'speed'
                        ? (newKind = 'Vitesse')
                        : (newKind = userPerformance.kind[tmpElemKind])
                    break
                case 6:
                    tmpElemKind = '6'
                    userPerformance.kind[tmpElemKind] === 'intensity'
                        ? (newKind = 'Intensité')
                        : (newKind = userPerformance.kind[tmpElemKind])
                    break
            }

            const tempObj = {
                value: elem.value,
                kind: newKind,
            }

            newData.push(tempObj)
        })

        const orderOfKind = [
            'Intensité',
            'Vitesse',
            'Force',
            'Endurance',
            'Energie',
            'Cardio',
        ]

        newData.sort((a: Elem, b: Elem): number => {
            const indexA = orderOfKind.indexOf(a.kind)
            const indexB = orderOfKind.indexOf(b.kind)

            return indexA - indexB
        })

        return newData
    }

    const customedLabels = ({ payload, x, y, cx, cy }: CustomedLabels) => {
        return (
            <Text
                y={y > cy ? y + 13 : y - 5}
                x={x === cx ? x : x > cx ? x + 20 : x - 20}
                textAnchor="middle"
                style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    fill: '#ffffff',
                    margin: '100px',
                    lineHeight: '24px',
                }}
            >
                {payload.value}
            </Text>
        )
    }

    return (
        <div className="performanceChart">
            <ResponsiveContainer width="100%">
                <RadarChart
                    data={refactoredData()}
                    margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
                    outerRadius={'180px'}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={customedLabels} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceChart
