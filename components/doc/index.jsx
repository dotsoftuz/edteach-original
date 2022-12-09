import Image from 'next/image';
import React from 'react';
import img from '../../public/images/mualliflik.jpg';
function Doc() {
  return (
    <div className="container mx-auto " id="doc">
      <h2 className="text-center text-slate-800 font-bold text-3xl">
        Loyiha mualliflik huquqi
      </h2>
      <div className="flex mt-20  ">
        <div className=" w-[50%] pt-40 ">
          <h2 className="text-center text-slate-800 font-bold text-xl">
            MUALLIFLIK HUQUQI VA TURDOSH HUQUQLAR TO‘G‘RISIDA
          </h2>
          <p className="pt-10 text-slate-800 font-medium text-center ">
            Mualliflik huquqi ijodiy faoliyat natijasi bo‘lmish fan, adabiyot va
            san’at asarlariga nisbatan, ularning maqsadi va qadr-qimmati,
            shuningdek ifodalanish usulidan qat’i nazar, tatbiq etiladi.
            Mualliflik huquqi quyidagi biron-bir obyektiv shaklda bo‘lgan oshkor
            qilingan asarlarga ham, oshkor qilinmagan asarlarga ham tatbiq
            etiladi:
          </p>
        </div>

        <div className="w-[50%] justify-center flex">
          <Image
            src={img}
            height={600}
            width={450}
            className="border border-black"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Doc;
