import getAllSuccess from "@/lib/getAllSuccess";
import getUserByEmail from "@/lib/getUserByEmail";

export default async function Home() {
  const user = await getUserByEmail("tunapotur@yahoo.com");
  const allSuccessList = await getAllSuccess();

  return (
    <>
      <div className="mb-8 flex flex-row items-center justify-between px-4">
        <div
          className={"flex w-full flex-row items-center justify-between px-2"}
        >
          <div className="flex flex-col">
            <h1 className="mb-6">{user.name}</h1>

            {allSuccessList.map((success) => (
              <div key={success._id} className="mb-4 flex flex-col">
                <span>{success._id}</span>
                <span>{success.header}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
