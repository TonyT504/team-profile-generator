

const generateBody = (receiveUserData) => {

    const employeeCard = receiveUserData.map(index => {
        if (index.officeNumber) {
            const { name, email, id, officeNumber } = index;
            return `
            <div class="flex flex-col bg-slate-200 m-5 drop-shadow-lg rounded-b" id="profile">
                <div class="bg-green-200 text-slate text-xl text-center rounded-t" id="employee-information">
                    <div id="employee-name">${name}</div>
                    <div id="employee-title">Manager</div>
                </div>
                <div class="p-5 rounded-b" id="container">
                    <div id="employee-details">
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#">ID #: ${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-phone">Office #: ${officeNumber}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email">E-mail: <a href="mailto:${email}">${email}</a></div>
                    </div>
                </div>
            </div>
            `;
        }
        if (index.github) {
            const { name, email, id, github } = index;
            return `
            <div class="flex flex-col bg-slate-200 m-5 drop-shadow-lg rounded-b" id="profile">
                <div class="bg-green-200 text-slate text-xl text-center rounded-t" id="employee-information">
                    <div id="employee-name">${name}</div>
                    <div id="employee-title">Engineer</div>
                </div>
                <div class="p-5 rounded-b" id="container">
                    <div id="employee-details">
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#">ID #: ${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-github">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email">E-mail: <a href="mailto:${email}">${email}</a></div>
                    </div>
                </div>
            </div>
            `;
        }
        if (index.school) {
            const { name, email, id, school } = index;
            return `
            <div class="flex flex-col bg-slate-200 m-5 drop-shadow-lg rounded-b" id="profile">
                <div class="bg-green-200 text-slate text-xl text-center rounded-t" id="employee-information">
                    <div id="employee-name">${name}</div>
                    <div id="employee-title">Intern</div>
                </div>
                <div class="p-5 rounded-b" id="container">
                    <div id="employee-details">
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#">School: ${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-school">School: ${school}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email">E-mail: <a href="mailto:${email}">${email}</a></div>
                    </div>
                </div>
            </div>
            `;
        }
    });
    return employeeCard.join('');
};

const generateTemplate = (receiveUserData) => {

    return `
<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="./output.css" />
</head>
<body class="relative min-h-screen">
    <header>
        <h1 class="bg-green-200 text-slate text-center text-4xl p-5">Team Members</h1>
    </header>
    <main class="flex flex-wrap justify-center">
        ${generateBody(receiveUserData)}
    </main>
    <footer class="absolute inset-x-0 bottom-0 text-center">
        <h3>&copy; ${new Date().getFullYear()} by <a href="https://github.com/tonyt504">tonyt504</a></h3>
    </footer>
</body>
</html>
    `;
};

module.exports = generateTemplate;

