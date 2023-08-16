import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello Mars</Title>
      <h1>Saint George Defender</h1>
      <h2>You were appointed Kristopher Pearson as your lawyer in Juvenile Court.</h2>
      <p>In order to begin your case, your attorney needs inofrmation from you</p>
      <p>If you have been charged with a crime (if you were an adult), then you must 
        complete the form below.</p>
      <p> 
        Visit {" "}
       <a href="https://forms.gle/KNobhrvUtLhUn57TA" target="_blank">
          Juvenile Delinquency Form
        </a>{" "}
      </p> 

      <Counter />
 
    </main>
  );
}
