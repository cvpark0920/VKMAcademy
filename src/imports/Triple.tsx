import imgTriple from "figma:asset/930c04d2a7465d0a701a833f5f3148a0a21a1ad7.png";

export default function Triple() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat content-stretch flex gap-2 items-start justify-start size-full"
      data-name="Triple"
      style={{ backgroundImage: `url('${imgTriple}')` }}
    />
  );
}