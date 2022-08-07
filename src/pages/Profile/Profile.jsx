import React from "react";
import CardProfile from "../../components/CardProfile";

export default function Profile() {
   let user = {
    nome: 'Victor Crest',
    idade: 26,
    localidade: 'London',
    numseguidores: '80K',
    numlikes: '803K',
    numseguindo: '1.4K'

   }
  return (
    <CardProfile user={user}/>
  );
}
