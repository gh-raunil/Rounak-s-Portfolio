import NotFound from "../not-found";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The requested route does not exist.",
};

export default function Page404() {
  return <NotFound />;
}
