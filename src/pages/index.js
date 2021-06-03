export default function () {
  return (
    <>
      <div>
        <Link href="/secure">Secure (Content Security Policy)</Link>
      </div>
      <div>
        <Link href="/secure">Insecure</Link>
      </div>
      <div>
        <Link href="/typical-xss-example">typical xss example</Link>
      </div>
    </>
  );
}
