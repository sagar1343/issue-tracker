import Loader from "@/app/components/Loader";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <Loader />,
});

function NewIssuePage() {
  return (
    <>
      <IssueForm />
    </>
  );
}

export default NewIssuePage;
