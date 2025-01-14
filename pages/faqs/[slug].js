import { getSlugs, getItem } from "lib/get-collection";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import Head from "next/head";
import { useEffect } from "react";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";

const FaqPage = ({ data }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="سوالات‌متداول, انجمن علمی کامپیوتر, دانشگاه صنعتی ارومیه"
        />
        <meta
          name="description"
          content="سوالات‌متداول در رابطه با فعالیت‌های انجمن"
        />
        <title>{`${data.title} | انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه`}</title>
      </Head>
      <article dangerouslySetInnerHTML={{ __html: data.content }}></article>
    </>
  );
};

FaqPage.getLayout = (content) => (
  <DefaultLayout>
    <PageLayout>{content}</PageLayout>
  </DefaultLayout>
);

export const getStaticProps = async ({ params }) => {
  const data = await getItem(`${params.slug}.md`, "collections/faqs/faqs");
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getSlugs("collections/faqs/faqs");
  return { paths, fallback: false };
};

export default FaqPage;
