import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    // main route
    index("routes/home.tsx"),

    // sinle route
    route("/about", "routes/about.tsx"),

    // layout route
    layout("layouts/auth-layout.tsx", [
        route('/login', 'routes/login.tsx'),
        route('register', 'routes/register.tsx')
    ])


] satisfies RouteConfig;
