import { signIn, signOut, useSession } from "next-auth/client";
import { TransferMoney } from "../TransferMoney";
import Head from "next/head";

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self';"
        />
      </Head>
      
      {!session && (
        <>
          Not signed in. To transfer money you need to login:
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Hello, {session.user.name}!!!
          <TransferMoney session={session} />
        </>
      )}
    </>
  );
}
