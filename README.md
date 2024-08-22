# PatikaJSFirstWorkshop - Kullanıcı Girişi ve Sayaç Projesi

Bu proje, kullanıcıdan ismini alarak metni kişiselleştiren ve sayfanın açıldığı andan itibaren geçen süreyi gösteren bir sayaç içeren basit bir web uygulamasıdır. Ayrıca, her saniye rastgele bir yazı rengi değişimi gerçekleştirir.

## Özellikler

- **Kullanıcı İsmi Girişi:** Sayfa açıldığında kullanıcıdan ismini isteme.
- **Kişiselleştirilmiş Mesaj:** Kullanıcının ismini içeren hoş geldin mesajı.
- **Sayaç:** Kullanıcının sayfayı açtığı andan itibaren geçen süreyi dakika ve saniye formatında gösterir.
- **Rastgele Yazı Rengi:** Her saniye yazının rengi rastgele bir renk ile değiştirilir.

## Nasıl Çalışır?

1. **Sayfa Açılışı:**
   - Sayfa yüklendiğinde, kullanıcıdan ismini giren bir `prompt` açılır.
   - Kullanıcının adı, sayfadaki ilgili mesaja eklenir.

2. **Sayaç:**
   - Kullanıcının sayfayı açtığı andan itibaren geçen süre dakika ve saniye olarak hesaplanır ve gösterilir.
   - Ayrıca, günün adı da gösterilir.

3. **Yazı Rengi Değişimi:**
   - Her saniye, sayfadaki metin rengi rastgele bir renge değişir.

## Kullanım

1. **HTML ve JavaScript Dosyası:**
   Proje, temel HTML ve JavaScript içerir. Aşağıdaki adımları izleyerek projeyi yerel olarak çalıştırabilirsiniz:

2. **Adım 1: Dosyayı İndirin veya Kopyalayın**
   Aşağıdaki kodu bir HTML dosyasına yapıştırın (`index.html` gibi) ve bir tarayıcıda açın.

    ```html
  <!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kullanıcı Girişi ve Sayaç</title>
    <style>
        .body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: black;
            color: yellow;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            gap: 2rem;
        }
        #message {
            font-size: 3rem;
            font-weight: bold;
        }
        #counter {
            font-size: 2rem;
            font-weight: bold;
        }
        #greeting{
            font-size: 2rem;
        }
    </style>
</head>
<body class="body">
    <div id="message">KODLUYORUZ</div>
    <div id="greeting"></div>
    <div id="counter">00:00:00 Cuma tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.</div>
    <script src="./script.js"></script>
</body>
</html>
    ```

    ```Javascript
    let userName = prompt("Lütfen isminizi girin:");

    const startDate = new Date();

    const greeting = document.getElementById('greeting');
    greeting.innerHTML = `Merhaba ${userName}! Hoş Geldin.`;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function updateCounter() {
        const now = new Date();
        const elapsed = new Date(now - startDate);

        const minutes = String(Math.floor(elapsed / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0');

        const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        const dayName = daysOfWeek[now.getDay()];

        const counter = document.getElementById('counter');
        counter.innerHTML = `${minutes}:${seconds} ${dayName} tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.`;

        document.body.style.color = getRandomColor();
    }

    setInterval(updateCounter, 1000);
    ```

## Geliştirme

Projeyi geliştirmek için şu adımları izleyebilirsiniz:

- **Daha Fazla Stil:** CSS ile sayfanın görünümünü kişiselleştirin.
- **Ekstra Özellikler:** Sayaç ve renk değiştirme özelliklerini genişletin.
- **Daha Fazla Etkileşim:** Kullanıcı etkileşimleri ekleyin ve kullanıcı deneyimini iyileştirin.

## Katkıda Bulunanlar

- **[İsminiz]**: Projeyi geliştirdi ve dokümantasyonu oluşturdu.

## Lisans

Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) altında lisanslanmıştır.
