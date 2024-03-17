import { useRoutes } from 'react-router-dom'
const MyRouter = ({ allRoutes }) => {
const routes = useRoutes([...allRoutes])
return routes;
}
export default MyRouter