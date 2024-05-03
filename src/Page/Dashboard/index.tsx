import Layout from '../../components/Layout.tsx'
import Title from '../../components/Title.tsx'
import DataVisualisation from '../../components/DataVisualisation.tsx'

function App() {
    return (
        <>
            <Layout>
                <Title name="Thomas" />
                <DataVisualisation />
            </Layout>
        </>
    )
}

export default App
