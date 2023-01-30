const contacts = require("./contacts");
const yargs = require("yargs");

yargs
	.command({
		command: "add",
		describe: "- Menambahkan contact baru.",
		builder: {
			nama: {
				describe: "Nama lengkap",
				demandOption: true,
				type: "string",
			},
			email: {
				describe: "Email",
				demandOption: false,
				type: "string",
			},
			noHP: {
				describe: "Nomor HP",
				demandOption: true,
				type: "string",
			},
		},

		handler(argv) {
			contacts.simpanContact(argv.nama, argv.email, argv.noHP);
		},
	})
	.demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
	command: "list",
	describe: "- Menampilkan semua nama dan nomor HP contact",
	handler() {
		contacts.listContact();
	},
});

// menampilkan detail sebuah contact
yargs.command({
	command: "detail",
	describe: "- Menampilkan detail sebuah contact berdasarkan nama",
	builder: {
		nama: {
			describe: "Nama lengkap",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		contacts.detailContact(argv.nama);
	},
});

// menghapus contact berdasarkan nama
yargs.command({
	command: "delete",
	describe: "menghapus sebuah contact berdasarkan nama",
	builder: {
		nama: {
			describe: "Nama lengkap",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		contacts.deleteContact(argv.nama);
	},
});

yargs.parse();
