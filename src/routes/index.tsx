import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello Mars</Title>
      <h1>Kristopher Pearson has been appointed to your case in Juvenile Court</h1>
      <h2>In order to begin your case, your attorney needs inofrmation from you</h2>
      <p>If you have been charged with a crime (if you were an adult), then you must complete the Juvenile Delinquency Form</p>
      <p>
        Visit{" "}
        <a href="https://forms.gle/KNobhrvUtLhUn57TA" target="_blank">
          Juvenile Delinquency Form
        </a>{" "}
        to complete the form.
      </p>
      <Counter />
 
    </main>
  );
}
