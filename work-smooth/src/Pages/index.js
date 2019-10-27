import withSplitting from "../global/HoC/withSplitting";
export const Signup = withSplitting(() => import('./Signup'));
export const Login = withSplitting(() => import('./Login'));
export const ErrorPage = withSplitting(() => import('./ErrorPage'));
export const Home = withSplitting(() => import('./Main'));