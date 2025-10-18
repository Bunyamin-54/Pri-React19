import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    // main route
    index("routes/home.tsx"),

    // sinle route
    route("/about", "routes/about.tsx"),

    // layout route
    layout("layouts/auth-layout.tsx", [
        route('/login', 'routes/login.tsx'),
        route('register', 'routes/register.tsx')
    ]),

    // nested route
    route('dashboard', 'routes/dashboard.tsx', [
        index('routes/overview.tsx'),
        route('stats', 'routes/stats.tsx'),
        route('analytics', 'routes/analytics.tsx'),
        route('profile', 'routes/profile.tsx'),
        route('settings', 'routes/settings.tsx'),
    ]),

    // before prefix
    // route('posts', 'routes/posts.tsx'),
    // route('posts/new', 'routes/new-post.tsx'),
    // route('posts/:id', 'routes/detail-post.tsx'),
    // route('posts/:id/update', 'routes/update-post.tsx'),

    // prefix route
    // ...prefix('posts',[
    //     index('routes/posts.tsx'),
    //     route('new', 'routes/new-post.tsx'),
    //     route(':id', 'routes/detail-post.tsx'),
    //     route(':id/update', 'routes/update-post.tsx'),
    // ]),

    // prefix and layout combined
    ...prefix('posts', [
        layout('layouts/posts-layout.tsx',[
            index('routes/posts.tsx'),
            route(':id', 'routes/detail-post.tsx')
        ]),
         route('new', 'routes/new-post.tsx'),
         route(':id/update', 'routes/update-post.tsx')
    ])


] satisfies RouteConfig;
