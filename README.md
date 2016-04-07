

# Array.prototype.genius()
Автор: Ухаев Джахар


Функция объявлена как прототип class-a Array. 
Формат входных данных:
```javascript
  var dataTest = [
  {
    from: 'Moscow', //required
    to: 'Piter', //required
    ticket: '343', 
    transport: 'train', //required
    details: { 
      seat: '45B', //required
      flight: '78A',  //required
      comment: 'Baggage will be automatically transferred from your last leg' //optional
    }
  },
  {
    from: 'Almaty',
    to: 'Moscow',
    ticket: '343',
    transport: 'train',
    details: {
      seat: '45B',
      flight: '78A',
      comment: 'Baggage will be automatically transferred from your last leg'
    }
  },
  {
    from: 'Piter',
    to: 'London',
    ticket: '343',
    transport: 'air',
    details: {
      seat: '45B',
      flight: 'SK455',
      comment: 'Baggage will be automatically transferred from your last leg'
    }
  }
```
    
    
Функция вызывается как :
```javascript
  dataTest.genius();
```

По умолчанию функция возвращает единую строку

Параметры
--------------
```javascript
dataTest.genius(true);
```
Вернёт массив строк разделённых по карточкам.
