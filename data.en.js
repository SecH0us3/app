const data = {
    categories: [
        {
            id: 1,
            name: "Authentication",
            minScore: 5,
            questions: [
                {
                    "id": 10001,
                    "question": "You understand the difference between identification, authentication, and authorization",
                    "score": 1,
                    "description": "<b>Identification:</b> This is the process of establishing the identity of a user or system.<br>Identification answers the question: <b>\"Who are you?\"</b><br>At this stage, the user provides data that allows the system to determine who they are.<br>Examples of identification:<ul><li>Entering a username</li><li>Providing a user identifier (card number or barcode)</li></ul><b>Authentication:</b> Following identification, authentication is the process of confirming that the user is indeed who they claim to be.<br>Authentication answers the question: <b>\"Prove that you are who you say you are\"</b><br>Examples of authentication:<ul><li>Entering a password</li><li>Using biometric data (fingerprint, facial recognition)</li><li>Using a one-time code (OTP) to confirm access</li></ul><b>Authorization:</b> Authorization occurs after successful authentication and determines the user’s access level to resources.<br>Authorization answers the question: \"What are you allowed to do?\"<br>Examples of authorization:<ul><li>Access to specific files or folders on a server</li><li>Permission to perform certain actions, such as editing data or installing software</li></ul>"
                },
                {
                    "id": 10002,
                    "question": "The identification method is separate from the authentication method",
                    "score": 1,
                    "description": "<p>The identification method should accept only the user identifier and return a temporary token, which the client will then use for authentication.</p><p>This approach protects against a large number of utilities capable of simultaneously brute-forcing login and password using dictionaries.</p><p>The token can also be limited not only by time but by the number of usage attempts, after which re-entering the identifier is required.</p>"
                },
                {
                    "id": 10003,
                    "question": "Identification and authentication methods are protected by an unobtrusive CAPTCHA test",
                    "score": 1,
                    "description": "<p>Any simple implementation is suitable, without traffic lights, such as <a href=\"https://www.google.com/recaptcha/about/\">Google reCAPTCHA</a>, where the user doesn’t even notice that a test is being solved in the browser.</p><p>This will protect against the simplest brute-force attempts.</p>"
                },
                {
                    "id": 10004,
                    "question": "A large number of incorrect user authentication attempts should not block the user",
                    "score": 1,
                    "description": "<p>Malicious actors may use user-blocking functionality to harm your brand, which could be done by dishonest competitors, extortionists, or simply malicious users.</p><p>Solution: it’s better to block the IP address after an abnormal number of attempts, allowing regular users to continue working.</p>"
                }
                ,
                {
                    "id": 10006,
                    "question": "Passkey is used for authentication",
                    "score": 5,
                    "description": "<p><strong>Passkey</strong> is a new authentication method that replaces passwords with a more secure and convenient way to access accounts and applications. Passkey is based on technology that uses asymmetric cryptography.</p><p>When using passkey, a key pair — <strong>private</strong> and <strong>public</strong> — is created on the device. The private key remains on the user's device and is never transmitted, while the public key is sent to the server. When the user attempts to log in, the server sends a request that is signed by the private key on the device. The server verifies the signature using the public key, and if it is correct, the user is authenticated.</p><h5>Benefits of passkey:</h5><ul><li><strong>Security</strong>: The private key never leaves the device, eliminating the risk of theft through network attacks.</li><li><strong>Convenience</strong>: No need to remember or manually enter passwords.</li><li><strong>Resistance to phishing</strong>: Attackers cannot access the private key even if they trick the user; additionally, passkey includes a check for the site address (domain) where it can be used. This verification is a key security element of passkey and prevents phishing attacks.</li></ul><p>Passkey can be used with biometrics (fingerprints, facial recognition) or PIN codes, making it a simple and secure alternative to traditional passwords.</p>"
                }                               
            ]
        },


        {
            id: 11,
            name: "MFA",
            minScore: 5,
            questions: [
                { 
                    id: 11001,
                    question: "Реализована многофакторная аутентификация",
                    score: 2,
                    description: `
                    <p>
                    Одного логина и пароля для аутентификации в любом серьёзном решении недостаточно, по одной простой причине – некоторые пользователи могут использовать одни и те же логин/пароль (идентификатор/аутентификатор) во множестве других мест, а если мест много, то и вероятность утечки этих данных увеличивается, а значит кто-то будет знать логин пароль вашего клиента
                    <p>
                    Потому требуется динамическое решение, которое не может быть одинаковым для множества других ресурсов`
                },
                {
                    id: 11002,
                    question: "Не используете отправку короткого кода по СМС в качестве второго фактора", 
                    score: 1,
                    description: `
                    <p>
                    Короткий код из СМС также легко подвергается перехвату злоумышленником с помощью фишинга или методами социальной инженерии
                    <p>
                    Также злоумышленники могут использовать методы подмены сим-карт, выпуска дублирующей симкарты, перехватом смс (вирусное программное обеспечение на телефоне жертвы, вашего клиента)
                    `
                 },
                 {
                    id: 11003,
                    question: "Вместо короткого кода по СМС вы предпочтёте TOTP генераторы", 
                    score: 1,
                    description: `
                    <p>
                    OTP генераторы также как короткие коды по СМС уязвимы перед фишинг атакой, просто потому что они генерируют 6 цифр
                    <p>
                    Однако они более защищены от дублировани или перехвата, потому что код генерируется исключительно в приложении на устройстве пользователя и не требуют интернета
                    <p>
                    Популярные генераторы сегодня: 
                    <ul>
                        <li><a href="https://2fas.com/">2fas</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Google_Authenticator">Google Authenticator</a></li>
                    </ul>
                    `
                 },
                 {
                    id: 11004,
                    question: "Вместо кода по СМС вы используете magic link", 
                    score: 1,
                    description: `
                    <p>
                    Если вы всё же решили использовать опасный метод аутентификации пользователя с помощью СМС, в дополнение к логину и пароль, то вам следует отправлять не короткий код, а ссылку, которая будет работать только с устройства (или хотя бы с IP), на котором вводились изначальные данные для идентификации/аутентификации
                    <p>
                    Например ссылка может выглядить так: https://example.com/dl/S3cur31t
                    <p>
                    Таким образом вы хотябы попытались защититься от банального фишинга
                    `
                 },
                 {
                    id: 11005,
                    question: "Не используете отправку короткого кода на email в качестве второго фактора", 
                    score: 1,
                    description: `
                    <p>
                    Короткий код из email также подвергается перехвату злоумышленником с помощью фишинга или методами социальной инженерии
                    <p>
                    Злоумышленники могут получить доступ к аккаунту почты пользователя элементарным способом – полученные логин и пароль будут использованы для доступа к почте пользователя, потому что многие пользователи используют один и тот же пароль на все свои аккаунты и не всегда беспокоятся установкой второго фактора; А если пароль не подходит, то злоумышленник добавляет к паролю единичку или восклицательный знак, или делает первую букву пароля большой, это вс происходит из-за неверных требований к паролям
                    `
                 },
                 // пуши вместо смс
                 // если конфёрм не в той локации - не принимать
                 {
                    id: 11006,
                    question: "Учитывайте историю окружения пользователя для усиления аутентификации",
                    score: 1,
                    description: `
                    <p>
                    Пользователи обычно входят с одних и тех же устройств и локаций, таким образом у вас есть возможность усилить меры предосторожности, если пользователь вошёл из другой страны, города, начал использовать VPN/Hosting/Tor IP адреса или совершенно другую OS / Браузер, также обычно входил днём, а теперь вдруг ночью
                    <p>
                    Неплохим способом является отправка Silent Push на мобильное устройство 
                    <p>
                    Как можно усилить аутентификацию помимо стандартной:
                    <ul>
                        <li>Если 2FA был по СМС/TOTP, то можно добавить magic link на почту с объяснением, что замечен необычный вход и добавить детали этого входа</li>
                        <li>Можно полностью аннулировать инициирующую сессию пользователя с предупреждением и возможностью осуществить вход, только если пройдёт по ссылке с почты</li>

                    </ul>
                    `
                 },
            ]
        },

        {
            id: 2,
            name: "User Enumeration Attack",
            minScore: 5,
            questions: [
                {
                    id:20001,
                    question: "Ответ метода идентификации не зависит от существования идентификатора в базе данных",
                    score: 1,
                    description: `
                    <p>
                    Если метод API сообщает "пользователя нет" – в зависимости от существования пользоватля в системе, то это позволяет злоумышленнику перебрать список идентификаторов пользователей 
                    <p>
                    Например, если в качестве идентификатора пользователя используется просто число или номер телефона, то это можно сделать в простом цикле
                    <p>
                    Если в качестве идентификатора выбран почтовый адрес – злоумышленник будет использовать публично доступные утечки`
                },
                {
                    id:20002,
                    question: "Ответ метода аутентификации не зависит от существования идентификатора в базе данных",
                    score: 1,
                    description: `
                    <p>
                    Если метод API сообщает "пользователя нет" или "пароль неверный" – в зависимости от существования пользоватля в системе, то это позволяет злоумышленнику перебрать список идентификаторов пользователей, как в предыдущем вопросе, лишь передавая дополнительно неверный пароль`
                },
                {
                    id:20003,
                    question: "Скорость метода идентификации не зависит от существования пользователя в базе данных",
                    score: 1,
                    description: `
                    <p>
                    Если ваш метод идентификации отвечает в среднем 50мс, если пользователя нет и 150мс, когда пользователь есть, то это позволяет злоумышленнику понять, угадал ли он идентификатор
                    <p>
                    Что делать: реализовать в коде условие - если пользователя в системе нет, то необходимо добавить искуссвенную рандомную зарежку с диапазоном, который позволит скрыть факт отсутствия дополнительной работы, которая производится в случае существования пользователя
                    <p>
                    Либо проводить эти дополнительные работы всегда, но это не всегда возможно`
                },
                {
                    id:20004,
                    question: "Скорость метода аутентификации не зависит от существования пользователя в базе данных",
                    score: 1,
                    description: `см. предыдущий вопрос`
                },
                {
                    id:20005,
                    question: "Скорость метода проверки 2FA не зависит от существования пользователя в базе данных",
                    score: 1,
                    description: `см. предыдущий вопрос`
                },
            ]
        },
        {
            id: 3,
            name: "Brute Force Attack",
            minScore: 4,
            questions: [
                {
                    id:30001,
                    question: "Методы идентификации/аутентификации/MFA/авторизации(важных действий) добавляют рандомную небольшую задержку",
                    score: 1,
                    description: `
                    <p>
                    Необходимо для усложнения любых возможных попыток подбора данных`
                },
                {
                    id:30002,
                    question: "Методы идентификации/аутентификации/MFA/авторизации(важных действий) имеют рейт лимиты",
                    score: 1,
                    description: `
                    <p>
                    Если кто-либо пытается заниматься перебором данных анонимно, т.е. без сессии, то в зависимости от важности действий необходимо такой IP адрес ограничивать
                    Варианты ограничений:
                    <ul>
                    <li>Завершать сессиию, если она начата</li>
                    <li>Предлагать подождать N минут, ответив кодом 429</li>
                    <li>Требовать дополнительных подтверждений, если допустимо, например - верифицировать почту, пройти капчу</li>
                    </ul>
                    
                    Когда рейт лимиты отсутствуют можно столкнуться с неожиданными сайд-эффектами:
                    <ul>
                    <li>Злоумышленники могут эффективно подбирать данные для идентификации/аутентификации/авторизации</li>
                    <li>Бизнес может столкнуться с избыточными тратами на отправку SMS / Email / Иными платными запросами во внешний мир</li>
                    <li>Большое число записей в логах / журналах аудита – способны создать иные сложности</li>
                    <li>А в случае медленных запросов к базе данных – ситуация приводит к тому, что из-за большого числа запросов все приложения подключенные к используемой БД испытывают деградацию производительности</li>
                    </ul>
                    `
                },
                {
                    id:30003,
                    question: "Рейт лимиты учитывают IP, Session, UserId",
                    score: 1,
                    description: `
                    <p>
                    Рейт лимиты должны работать независимо друг от друга и достижение лимита по одному фактору не должно отменяться другими
                    `
                },
                {
                    id:30003,
                    question: "Рейт лимиты позволяют настроить правила на разные диапазоны времени",
                    score: 1,
                    description: `
                    <p>
                    Настраивай идни и те же правила лимитов на разные диапазоны времени: секунды / минуты / часы / дни (для экстремалов)
                    `
                },
                {
                    id:30004,
                    question: "Решение должно работать даже в случае параллельного вызова методов",
                    score: 1,
                    description: `
                    <p>
                    Если приложение работает в рамках одного сервера, то поддойдёт обычный Lock по ключу или Semaphore/Mutex, в зависимости от особенностей приложения
                    <p>
                    Для приложений, распределённых по множеству серверов нужно использовать любую реализацию <a href="https://redis.io/docs/latest/develop/use/patterns/distributed-locks/">Distributed Locks</a>
                    `
                },
                // гонка потоков
            ]
        },
        {
            id: 4,
            name: "Passkey requirements",
            minScore: 6,
            questions: [
                {
                    id:40001,
                    question: "User Verification = Required",
                    score: 2,
                    description: `
                    <p>
                    Этот флаг говорит о том, что требуется использовать только ключ с <a href="https://www.w3.org/TR/webauthn-2/#dom-authenticatorselectioncriteria-userverification">авторизацией</a>
                    <p>
                    Потому что утеря одного <a href="https://www.yubico.com/">yubikey</a> не должна приводить к компрометации аккаунта
                    <p>
                    <code>{
                        "authenticatorSelection": {
                            "userVerification": "required"
                        }
                    }</code>`
                },
                {
                    id:40002,
                    question: "Пользователь сам решает, что именно использовать в качестве ключа",
                    score: 2,
                    description: `
                    <p>
                    Т.е. мы не должны привязываться к платформе
                    <p>
                    <code>{
                        "authenticatorSelection": {
                            "authenticatorAttachment": "cross-platform"
                        }
                    }</code>
                    
                    <p>Хотя если вы явно хотите задать какое-либо предпочтение аутентификатору, то лучше задать через hints
                    <p>
                    <code>{
                      "hints": [
                            "client-device",
                            "hybrid",
                            "security-key"
                        ]
                    }
                    </code>`
                },
                {
                    id:40003,
                    question: "Вы используете Signature Counter",
                    score: 2,
                    description: `
                    <p>
                    Счётчик (<a href="https://www.w3.org/TR/webauthn-2/#signature-counter">Signature Counter</a>) в WebAuthn, также известный как Signature Counter или Sign Count, служит для защиты от клонирования аутентификаторов и предотвращения повторного использования одних и тех же криптографических данных. Это один из параметров, который включён в ответ аутентификатора во время процесса аутентификации.`
                },
                {
                    id:40004,
                    question: "Вы ознакомились с различными online demo используя все возможные платформы и ключи",
                    score: 1,
                    description: `
                    <p>
                    Список важных ресурсов для понимания работы протокола WebAuthN и так называемых Passkeys
                    <ul>
                        <li><a href="https://webauthn.guide/">Step by step guide</a></li>
                        <li><a href="https://webauthn.me/">The good Interractive demo</a></li>
                        <li><a href="https://webauthn.io/">Try all possibilities the WebAuthn specification</a></li>

                        <li><a href="https://www.w3.org/TR/webauthn-2/">Specification "Web Authentication: An API for accessing Public Key Credentials"</a></li>
                        <li><a href="https://www.passkeys.io/">Just little more info: What is a passkey?</a></li>
                    </ul>
                    `
                },
                {
                    id:40005,
                    question: "Вы сообщили информацию о поддержке passkeys всему интернету",
                    score: 1,
                    description: `
                    <p>
                    Просто приложите пруфы сюда <a href="https://passkeys.directory/">https://passkeys.directory/</a>
                    <p>
                    И хорошие менеджеры паролей уведомят хороших пользователей об этом
                    `
                },
            ]
        }
    ]
};