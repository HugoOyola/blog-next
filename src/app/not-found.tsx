// import Link from "next/link"
import ButtonBack from "../components/ButtonBack";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">Página no encontrada</p>
      {/* <Link href="/" className="mt-4 text-blue-600 hover:underline">
      Volver a la página principal
    </Link> */}
      <ButtonBack> Volver a la página principal</ButtonBack>
    </div>
  );
};

export default NotFound;
