import Image from "next/image";
import Layout from "@/components/Layout";
import Styles from "../styles/nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout layout="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={Styles.contenido}>
          <Image Layout="responsive" width={600} height={450} src="/img/foto2.jpeg"
          alt= "imagen sobre nosotros" />
          <div>
            <p>
              La idea de la voluntad de poder: Una de las ideas centrales de
              Nietzsche es la idea de la "voluntad de poder", que se refiere a
              la idea de que el impulso fundamental detras de todas las cosas es
              el deseo de aumentar y ejercer el poder. En cierto sentido, se
              podría ver la inteligencia artificial como una encarnación de esta
              idea, ya que las IA son sistemas que están diseñados para procesar
              grandes cantidades de datos y tomar decisiones en función de esa
              información.  <p>La
              muerte de Dios: Nietzsche es famoso por proclamar la "muerte de
              Dios", argumentando que la religión y la moralidad tradicionales
              habían perdido su poder y su sentido en la sociedad moderna. De
              manera similar, algunos han argumentado que la creciente
              influencia de la inteligencia artificial podría llevar a la
              "muerte" de la humanidad tal como la conocemos, ya que las IA
              podrían eventualmente reemplazarnos en muchos límites de la vida y
              alterar alteran nuestra forma de vida</p> 
               <p>En resumen, hay varias maneras en que se podría asociar a Nietzsche con la
              inteligencia artificial, ya que su filosofía aborda temas como el
              poder, la moralidad y la evolución de la humanidad que son
              relevantes para la discusión sobre las implicaciones de la IA en
              la sociedad.</p>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;






