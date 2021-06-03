import Link from "next/link";

export default function () {
  return (
    <>
      <div>
        <Link href="/secure-header">
          Secure (Content Security Policy) via header
        </Link>
      </div>
      <div>
        <Link href="/secure-meta">
          Secure (Content Security Policy) via meta tag
        </Link>
      </div>
      <div>
        <Link href="/insecure">Insecure Page</Link>
      </div>
      <div>
        <Link href="/typical-xss-example">typical xss example</Link>
      </div>
    </>
  );
}
