import {Inter,Lusitana} from 'next/font/google'


 const inter=Inter({subsets:['latin']})  ; //here we are importing the Inter from google font and using subset as latin which is for western or english language
 const lusitana=Lusitana({subsets:['latin'],weight:'700'});

 export {inter,lusitana}