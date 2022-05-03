//Egzersiz Level1 - 1
/*  Calculate the total annual income of the person from the following text.
 ‘He earns 4000 euro from salary per month, 10000 euro annual bonus,
 5500 euro online courses per month.’ */

 const yazı= 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

 const pattern = /\d+/g 
 
 const eşleşme =  yazı.match(pattern)
 //console.log(eşleşme)  
 
 const a= eşleşme.map((a)=>parseInt(a))
 //console.log(a)
 
 const toplam= a.reduce((x,y)=>x+y)
 
 console.log('yazıdaki sayı toplamı:',toplam)



//Gerisini yapamadım, ileride tekrar döneceğim.

