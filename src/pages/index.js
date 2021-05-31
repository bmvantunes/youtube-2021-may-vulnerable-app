import { signIn, signOut, useSession } from "next-auth/client";
import {TransferMoney} from '../TransferMoney';

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in. To transfer money you need to login:
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Hello, {session.user.name}!!!
          <TransferMoney session={session}/>
        </>
      )}
    </>
  );
}
