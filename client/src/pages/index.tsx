import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Todo } from "../components/Todo";

const Home: NextPage = () => {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
};

export default Home;
