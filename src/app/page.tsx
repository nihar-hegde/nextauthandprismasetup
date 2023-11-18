import UserInput from "@/components/forms/userinput";

export default function Home() {
  return (
    <main >
      <div className="h-screen flex flex-col gap-5">
        <h1 className="text-5xl">Home</h1>
        <UserInput />
      </div>
    </main>
  )
}
