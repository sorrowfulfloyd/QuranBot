# QuranBot

[TR]

- Maksat öğrenme olsun diye Node.js'da yazdığım ufak bir proje.
- secret.json dosyasını oluşturup içerisinde sadece TOKEN ve Telegram Authkey'inin olduğu bir pairden ibaret bir obje oluşturun.

Kullanımı:

Bota yazdığınız Sure ve Ayet numarasına karşılık size Ayetin Arapça ve Türkçe halini altalta atar.

_Amacım en kısa sürede ortaya çalışan bir şey koymak olduğu için şu anlık amacına ulaştım. Fakat geliştirilmesi gereken bir çok yönü var._
_Bot şu haliyle sadece düzgün bir biçimde gönderilen mesajlara ancak cevap verebiliyor_

`SURE-ADI AYET-NUMARASI`
`Örn:`
`Bakara 255`

**Bu formatın dışında kalan veya bozuk yazılan Sure adı botun bozulmasına sebep oluyor.**

### İyiliştirilmesini isteseydim yapabileceğim şeyler

_şuanlık sadece hata düzeltmeleri_

- Formatın dışına çıkan kullanıcı mesajları için telegraf kütüphanesi tarafından atılan hatanın işlenip kullanıcıya bildirilmesi, böylece botun çökmemesi.
- didYouMean kütüphanesi kullanılarak bozuk yazılan sure adlarının otomatik düzeltilip öyle işlenmesi. Örn: Faatiha => Fatiha
- Bot şu haliyle text mesajı halindeki herşeyi Sure-Ayet formatından sanıp ona göre hareket ediyor. Bunun olmaması için telegraf kütüphanesinin .hears() fonksiyonu veya elle yazılan bir karşılama fonksiyonu iş yapabilir.

Böyle yani, öğreniyoruz işte.
