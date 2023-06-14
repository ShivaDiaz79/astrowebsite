import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FrequentQuestions = ({ text, }) => {
  return (
    <div className="w-full px-4 pt-10 py-9 grid grid-cols-4 ">
      <div className="mx-auto  w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  ¿Cuáles son las ventajas y desventajas de desarrollar un
                  sitio web de forma nativa en comparación con utilizar un
                  gestor de contenido?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Un sitio web desarrollado de forma nativa es más rápido y
                personalizado, pero requiere más tiempo y habilidades de
                programación. Un sitio web diseñado con un gestor de contenido
                es más fácil de mantener y actualizar, pero puede ser menos
                flexible y menos rápido.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  ¿Cómo afecta el rendimiento y la escalabilidad de un sitio
                  web el hecho de ser desarrollado de forma nativa o con un
                  gestor de contenido??
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Un sitio web desarrollado de forma nativa puede ser más
                rápido y escalable, ya que no depende de un sistema de gestión
                de contenido que agregue una sobrecarga adicional. Sin embargo,
                un sitio web diseñado con un gestor de contenido puede ser más
                fácil de escalar y mantener.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  ¿Cómo afecta el rendimiento y la escalabilidad de un sitio
                  web el hecho de ser desarrollado de forma nativa o con un
                  gestor de contenido??
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Un sitio web desarrollado de forma nativa puede ser más
                rápido y escalable, ya que no depende de un sistema de gestión
                de contenido que agregue una sobrecarga adicional. Sin embargo,
                un sitio web diseñado con un gestor de contenido puede ser más
                fácil de escalar y mantener.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  ¿Cómo afecta el rendimiento y la escalabilidad de un sitio
                  web el hecho de ser desarrollado de forma nativa o con un
                  gestor de contenido??
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Un sitio web desarrollado de forma nativa puede ser más
                rápido y escalable, ya que no depende de un sistema de gestión
                de contenido que agregue una sobrecarga adicional. Sin embargo,
                un sitio web diseñado con un gestor de contenido puede ser más
                fácil de escalar y mantener.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
export default FrequentQuestions;
