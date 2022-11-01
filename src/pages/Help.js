import React from "react";
import "./Help.css";
import Img from "./working.png";

function Help() {
  return (
    <div className="help_wrap">
      <div className="img_wrap">
        <img src={Img} />
      </div>
      <div className="text_wrap">
        <h1>Siz uchun foydali</h1>
        <p>
          Eng avvalo klaviaturangizga yaxshilab nazar soling. Biz ingliz (lotin)
          harflari berilgan klaviaturaga qaramasdan yozishni o’rganamiz. Siz
          ko’rib turgan lotin harflariga asoslangan tugmalarning joylashuvi
          familiyasi Qwerty bo’lgan mutaxassis tomonidan joylashtirilgan. U
          klaviaturaning birinchi qatoriga o’zining familiyasini «qwerty» qilib
          joylashtirgan, shuning uchun hozir dunyoda eng ko’p ishlatiladigan bu
          standart joylashuvli klaviatura «Qwerty klaviaturasi» deb ham ataladi.
          <br />
          <br />
          Har qanday klaviaturaning lotincha «F» va «J» harflari joylashgan
          tugmalarda boshqalariga nisbatan ajralib turadigan, bir oz bo’rtib
          chiqqan joyi bo’ladi. Buning sababi, ikki qo’lning ko’rsatkich
          barmoqlari shu tugmalarda turishi kerak va matn teruvchi ko’rsatkich
          barmoqlarini klaviaturaga qaramasdan, tugmachalarning bo’rtib turgan
          joyini barmoq uchlari bilan his qilgan holda topib olishi kerak. Shu
          tarzda, ikki qo’lning ko’rsatkich barmoqlari «F» va «J» harflariga
          qo’yiladi, qolgan har ikki qo’ldagi uchtadan barmoq ketma-ket
          joylashgan tugmachalar ustiga qo’yiladi. Klaviaturada qo’l mana bunday
          holatda turishi kerak:
          <br />
          <br />
          Chap qo’l barmoqlari A S D F harflari yozilgan tugmalarda, o’ng qo’l
          barmoqlari esa J K L ; tugmalari ustida turishi kerak. O’ng qo’lning
          bosh barmog’i probel tugmasini bosich uchun ishlatilishi kerak.
          <br />
          <br />
          Quyidagi rasmda qo’llarning qaysi barmoqlari klaviaturadagi qaysi harf
          tugmasini bosishi kerakligi ko’rsatilgan. E’tibor bering,
          barmoqlarning ranglari ular bosishi kerak bo’lgan klaviatura tugmalari
          ranglari bilan o’zaro mos:
          <br />
          <br />
          Endi klaviaturaga qaramasdan yozishni mash qila boshlar ekansiz,
          Sizdan juda katta sabr talab etiladi. Qanchalik ko’p mashq qilsangiz,
          shunchalik tez o’rganib olasiz. «Tez» deganda Siz klaviaturaga
          qaramasdan yozishni bir necha soatda o’rganib olasiz, degan ma’no
          tushunilmasligi kerak. Hatto bir necha kunda ham o’rganmasligingiz
          mumkin. Bir necha hafta yoki hatto bir necha oylik shug’ullanishdan
          keyin klaviaturaga qaramasdan, tezlik bilan matn terishni o’rganib
          olasiz. Mashqda har qancha qiyin bo’lmasin, ishoning, maqsadingizga
          erishganingizdan so’ng bu zamonaviy ilmni o’rganishga sarflagan
          vaqtingizga achinmaysiz!
          <br />
          <br />
          Kompyuterda matn muharririni oching-da, avval alohida-alohida
          harflarning yozilishini mashq qiling. Masalan, F va J harflarining
          yozilishini. Avval to’rt marta FFFF deb yozib ko’ring, keyin to’rt
          marta JJJJ harflarini yozing. Keyin aralash qilib, FFJJ FFJJ deb
          yozasiz. Keyin esa, navbat bilan FJFJ FJFJ harflarini yozing. Bu
          harflar yozilishini yaxshi o’zlashtirganingizdan keyin boshqa
          harflarga o’tishingiz mumkin bo’ladi.
        </p>
      </div>
    </div>
  );
}

export default Help;
