import { useRouter } from "next/router";
import { useState } from "react";

export default function TypicalXssExample() {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const commentOrQuery = comment || router.query.initial;

  // you can try setting the textbox to:
  // <img src="this-image-does-not-exist.png" onerror="console.log(localStorage);" style="display:none;"/>
  // or navigate to:
  // http://localhost:3000/typical-xss-example?initial=%3Cimg%20src=%22this-doesnot-exist.png%22%20onerror=%22console.log(localStorage);%22%20style=%22display:none;%22/%3E

  return (
    <>
      <h2>Your Comment</h2>
      <textarea
        onChange={(evt) => setComment(evt.target.value)}
        value={commentOrQuery}
      ></textarea>

      <h2>Preview:</h2>
      <div dangerouslySetInnerHTML={{ __html: commentOrQuery }}></div>
    </>
  );
}
