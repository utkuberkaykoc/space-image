# Space Image API Client

Bu proje, [https://utku.berkaykoc.net/api/entertainment/space-image](https://utku.berkaykoc.net/api/entertainment/space-image) API'sini kullanarak belirli bir gün ve ay için uzay görüntüsü almanızı sağlar.

## Kurulum

1. Bu projeyi klonlayın:
   ```sh
   git clone https://github.com/utkuberkaykoc/space-api-client.git
   cd space-api-client
   ```

2. Gerekli paketleri yükleyin:
   ```sh
   npm install
   ```

3. Uygulamayı başlatın:
   ```sh
   npm start
   ```

## Kullanım

### Uzay Görüntüsü Bilgisi

Belirli bir gün ve ay için uzay görüntüsü almak için `getSpaceImage` fonksiyonunu kullanın:
```javascript
getSpaceImage(15, 'ocak');
```

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
