import classes from './Product.module.css'
import ProductItem from "./ProductItem"

function ProductList() {
    const product = [
        {
            id: '1',
            url: 'https://book24.ru/product/chertovy-podrostki-kak-nayti-obshchiy-yazyk-s-povzroslevshim-rebenkom-6625557/',
            img: 'https://cdn.book24.ru/v2/ITD000000001290042/COVER/cover13d__w410.webp',
            class: 'podrostky',
            name: 'Карпов Никита Леонидович: Чертовы подростки! Как найти общий язык с повзрослевшим ребенком',
            description: 'Детский и подростковый психолог Никита Карпов знает о взрослении всё. 20 лет он помогает подросткам и родителям найти общий язык и решает их проблемы. В легкой форме, с долей юмора, Никита Карпов рассказывает о реальных кейсах, профессиональных техниках и методиках, которые спасут ваши нервы, наладят крепкие доверительные отношения и помогут воспитать самостоятельного человека. Он раскроет глаза, что на самом деле пубертат — очень интересный период, от которого можно получать удовольствие и родителям, и подросткам',
            price: '472 р.'

        },
        {
            id: '2',
            url: 'https://book24.ru/product/vashe-delo-biznes-ot-missii-do-vershiny-5242477/',
            img: 'https://ndc.book24.ru/resize/820x1180/iblock/b4b/b4b87819564b663e99b1c01e817360b2.jpg',
            class: 'vasheDelo',
            name: 'Торсунов Олег Геннадьевич: Ваше дело. Бизнес от миссии до вершины',
            description: 'Истинно богатый человек — это не тот, кто получил материальные блага и потратил их на себя, а тот, кто нашел способ использовать заработанное не только в своих целях, но и для помощи другим',
            price: '769 р.'

        },
        {
            id: '3',
            url: 'https://book24.ru/product/kak-ne-umeret-v-odinochestve-5430761/',
            img: 'https://ndc.book24.ru/resize/820x1180/iblock/68f/68f5c58e26d98ee290c0c3154637fbb6/e427e501ea39e2d7ed01e822581f0281.jpg',
            class: 'odinochestvo',
            name: 'Ричард Роупер: Как не умереть в одиночестве',
            description: 'Эндрю живет в небольшой квартире в Лондоне и работает в муниципалитете, в отделе регистрации смертей. Мало того что работа специфическая, Эндрю еще приходится изо дня в день поддерживать среди коллег миф о своей якобы успешной жизни. При приеме на работу он, не расслышав вопроса, ответил "да" вместо "нет", когда его спросили, женат ли он. С годами Эндрю создал целый вымышленный мир, где у него есть особняк, любимая жена и двое детей',
            price: '85 ₽.'

        },
        {
            id: '4',
            url: 'https://book24.ru/product/opyty-bespriyutnogo-neba-5455029/',
            img: 'https://cdn.book24.ru/v2/ITD000000000992767/COVER/cover13d__w410.webp',
            class: 'neba',
            name: 'Гаврилов Степан Егорович: Опыты бесприютного неба',
            description: 'Зубастый во всех смыслах, провокационный, битниковский, психоделичный — именно таким назвали критики дебютный роман Степана Гаврилова «Опыты бесприютного неба». Книга для молодых — и не важно, какого они возраста',
            price: '80 ₽.'

        },
        {
            id: '5',
            url: 'https://book24.ru/product/vazhnye-gody-pochemu-ne-stoit-otkladyvat-zhizn-na-potom-neon-pocketbooks-6612893/',
            img: 'https://cdn.book24.ru/v2/MIF00034767/COVER/cover13d__w410.webp',
            class: 'gody',
            name: 'Мэг Джей: Важные годы. Почему не стоит откладывать жизнь на потом',
            description: 'Это умная и конструктивная книга о годах, которые нельзя тратить впустую. Компактный и легкий покетбук удобно взять с собой в дорогу, путешествие или на прогулку',
            price: '366 ₽.'

        },
        {
            id: '6',
            url: 'https://book24.ru/product/gormony-schastya-priuchite-svoy-mozg-vyrabatyvat-serotonin-dofamin-endorfin-i-oksitotsin-neon-pocket-6615087/',
            img: 'https://ndc.book24.ru/resize/820x1180/iblock/b95/b95d2974acd8d56eff67020dcf3f9cf0/bc67a6c0ba21c0ac6d39850f56c67e2d.jpg',
            class: 'gormony',
            name: 'Бройнинг Лоретта Грациано: Гормоны счастья',
            description: 'Книга в формате покетбука, даст представление, как формируется настроение и ощущение счастья. Она содержит революционный подход к повышению вашего уровня удовлетворенности жизнью.',
            price: '386 ₽.'

        }

    ]
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className={classes.product}>
                    {product.map((item) =>
                        <ProductItem key={item.id} product={item} />)}
                </div>
            </div>
        </div>

    )
}
export default ProductList