import { Dropdown } from "@bmvantunes/please-dont-install-this-package-this-is-an-xss-on-purpose";

export function TransferMoney({ session }) {
  return (
    <>
      <h1>Transfer Money</h1>

      <form onSubmit={transferMoney}>
        Transaction Speed: <Dropdown options={["Fast", "Slow"]} />
        <br />
        <br />
        <label>
          Account Name: <input name="account" type="text" />
        </label>
        <br />
        <br />
        <label>
          $<input name="amount" type="number" />
        </label>
        <br />
        <br />
        <button>Transfer</button>
      </form>
    </>
  );
}

function transferMoney(event, args) {
  event.preventDefault();

  fetch("/api/transfer-money", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      account: event.target.account.value,
      amount: event.target.amount.value,
    }),
  })
    .then((j) => j.json())
    .then(() => alert("Transfer Done"));
}
