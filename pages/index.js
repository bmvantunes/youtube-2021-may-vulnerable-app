import { signIn, signOut, useSession } from "next-auth/client";
import { Dropdown } from "@bmvantunes/please-dont-install-this-package-this-is-an-xss-on-purpose";

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          <Dropdown options={["Transfer", "View"]} />
          Signed in as {JSON.stringify(session)} <br />
          <button onClick={() => signOut()}>Sign out</button>

          <h1>
            Transfer Money
          </h1>
        </>
      )}
    </>
  );
}
