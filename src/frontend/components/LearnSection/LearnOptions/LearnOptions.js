import React from 'react';

import './LearnOptions.sass';

import LearnOption from './LearnOption/LearnOption';

const learnOptionsData = [{
  "imgURL": "https://lh3.googleusercontent.com/48NPgP2LCznTbWf-zokEfpUCnjAM4N5z-cKgW07y3_qtCSuRsmqPMI7J9ADYJKrz3AN0lMe5jUkYkOh6myDOP6-sn80hZBy5DAUSaAPXBJgvOXW6Mik3EmN99icWfDPNcbd8hXZzBYZv5WC1bgneLy_Gvq5qSMghFkax8ZVKLeoU9jOj_8uv0V3msJ0DAE3LRWcRqJdv84sIJBSa9tK49G3ChHExPhFvx-mu0oJ7tsUT9tUIlEMh_Md871l5nitgkYJlroqKWTpzZUxCwnjvkHEQEGwZlcLvM8F62-XBiQ_r8KiDQ3AsohXn-8IC-2VBD6spUVJuH1RV9gJxy3nmuNZFZLC9kiYiehxJJPOisR4Ay-SietNIXDdR5mudw8xkw6-p91s6R_-BaGvCRm4ae_Sv_BvLGOCi0b7n032AmDVvMYjjvfhAXgEUfLF95p6ATyMMlBMIYGC4U2Fq2IIBEbBnvZJ7JgnRG34aLlz3_rhTEBWdj2zufBOFrh-USZAvLUoNyMSWmwSTon_tLQOS90OD8DozaVQ6yp1BXWtox1SwJyDtUU2BLde1qrWcpuNtABeqR79PnCG2BjcOzcgp73e0-nhnO7h2ya6OCVDTwvsJDwlM7eHTQbYdAxC8h_ncNGhsQXbqXDodqHJ7H3C1RI7xsislpHAIrlUPqm9uHaqKKYW3dSERRUZuvs4R9A=w890-h667-no?authuser=0",
  "imgAlt": "",
  "title": "Reforestation",
  "subtitle": "Recreating the indigenous forest",
  "description": "As part of the Greenpop initiative, we are planting over 300 trees in an area of cleared alien vegetation. Bring all your friends and a picnic basket and come join us in making a real and lasting difference to our natural environment."
}, {
  "imgURL": "https://lh3.googleusercontent.com/p1Noyt9_J8tvYNu5up3LVAp7N9_UIYWdGwUFPCyxWL8GX2oMKNTaTPF0HreptskwcDXmQ_UpQNEt2cHBfx0X5OkmAk8nDMzcNq8jW9HC8edwSJlstXmZ-UrvMnMrH0LbSneZAL81WgWbkm1hDE2TdGHrkNB0OMtZszRnDg72vgRLi_eZSkDj_tyQrmXAn-6VL_VI3BxXXkp5Id7NMiiOWlYjYgAIdC4pa6LBz08V0228_QbSNAIL65Ad9i2YADdX24RIuaHfw-sc0JseoDW31V-ed5o8QxQ7wXoJPBfaMDXtocrWSM76a8gE5c89nOW1M9iQ2fObEw41gcwjsW6UQY6MZWMh0Q2Zxlk-dCfw3MfL3VL6C9pebuxoh6jIgwVcgD1xsH9K4-4W8j8RQisRvWyNKQSnxbqbkIihAK2-CQ4IR19E2CbwFuDJMrF084RFlFH8qZe7jaWZPn-nxSiiAyKESqq5uk6ADLuXjfi-wxtOvY0UiSXPCE3Huty01-gyPAn9RYp0pZrcHEHjr8GjW7Xp0pSM_mHArkIIlJJ9XD9OwqOgAhbBEghm4XDJGYFJscgyAGqkEiRVVBoK0RP-nGP0Kvi50PmMy_xT3B-KIiZ7E7CzTpoEInFssUgsQc8gFUMqGHiM27yGSCaAdbjE-UPUx0hSgTEpKxUJiVvchm0TK6tqRbQ9Uab6LDafzA=s233-no?authuser=0",
  "imgAlt": "",
  "title": "Concious Gardening",
  "subtitle": "Build the perfect garden and a mind to match it",
  "description": "A healthy mind promotes a healthy environment. A healthy environment promotes a healthy mind. Come join us and start your own journey to a happier, healthier you and a beautiful garden to enjoy it in."
}, {
  "imgURL": "https://lh3.googleusercontent.com/ZFPGZBZAYNBaC38QLZfYHp3Z0jY6xXmPS6wzycIVjM3yXD-RZoVqe6NUOleKaGA_im0pQZeUj_pDGrEBn8aQlwwutuDOj-Q6pqiAAefunjJo3vDhp17RUYZI9GnQfpSdH9me-PS52weQg_WmB30DrQ8BmLW87uXtxGgmRuSIP2xgXDhSeQO0e25Z9D7bPU63r0rgHL4SB-5j9ANCr17W606DFEe370AH2Bkj110f8ggIukAv5tHz66oS38Bav-JIaeZRNzsu0xKaSKmVGTyRWeIuVlzpCzhjKAR9OyscS1tb4Hsc6eGfXmmSD6rLKTVtmrR-2mluYRY3lKvhSh2w6ic9k81CnfreiulVyCV8-tqDtzDnBrRrcbHCeUKlcsOKEAA_2pfT_BWODd6fpp6v-Rn0nt5iFvsV7dc9PKwiBBuuEunqUXqZwyf8SCIm81l1WANE4ozOoKnp2usO1_JzT1ozAR_sbFKLZL9lnk86jiNrPs2Ch4gBoeBvyhCuPhVxgni5z84vMwmnJBiBHl5wh03MCUwr5GC5DHNNlC-yyZQNjvTN9KoNXhnFvskxJ8Jq6v59P5bh4ufM-u6bNgTJ1RB77Zo1ieoWnkCsV0XWc2RMaG3pNzip5w-FNj-NRAG8SfLWFVkxUDsMw7mMNZBWZLno7XjVmyB19P-7YnphqFqBSdq9ZNiYr6b7UusG8g=w339-h254-no?authuser=0",
  "imgAlt": "",
  "title": "Music on the Deck",
  "subtitle": "Live music at Wild Spirit",
  "description": "Join us for an unforgettable night of live music and festivities at wild spirit."
}];

const LearnOptions = () => (
  <div id='LearnOptions'>
    {learnOptionsData.map(lod => (
      <LearnOption
        key={lod.title}
        imgURL={lod.imgURL}
        imgAlt={lod.imgAlt}
        title={lod.title}
        subtitle={lod.subtitle}
        description={lod.description}
      />
    ))}
  </div>
);

export default LearnOptions;