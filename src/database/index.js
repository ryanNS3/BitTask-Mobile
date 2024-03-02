import * as SQLite from "expo-sqlite";

export function openDatabase() {
  const db = SQLite.openDatabase("BitTask.db");
  return db;
}

export const criarTabela = (db) => {
    db.transaction(
        (tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS tasks (
                    id INTEGER PRIMARY KEY,
                    nome TEXT NOT NULL,
                    descricao TEXT,
                    categoria TEXT CHECK(categoria IN ('pessoal', 'acadêmico', 'profissional', 'outros')) NOT NULL,
                    prioridade TEXT CHECK(prioridade IN ('baixa', 'média', 'alta')) NOT NULL,
                    status INTEGER CHECK(status IN (0, 1)) DEFAULT 0,
                    data_criacao DATETIME DEFAULT (DATETIME('now', 'localtime')),
                    data_entrega TEXT NOT NULL
                );`, [],
                () => {
                  console.log("Tarefa adicionada com sucesso!"); 
                  verTodasTarefas(db)
                },
                (error) => {"erro: ", error}
            );
        }
    )
};


        
export const criarTarefa = (db, nome, descricao, categoria, prioridade, data_entrega) => {
    db.transaction(
        (tx) => {
          tx.executeSql(
            "INSERT INTO tasks (nome, descricao, categoria, prioridade, data_entrega) VALUES (?, ?, ?, ?, ?)",
            [nome, descricao, categoria, prioridade, data_entrega ],
            () => {
              console.log("Tarefa adicionada com sucesso!"); 
              verTodasTarefas(db)
            },
            (error) => {"erro: ", error}
          );
        }
    )
};

export const verTodasTarefas = (db) => {
  db.transaction(
    (tx) => {
        tx.executeSql("SELECT * FROM tasks", [], 
        (_, resultSet) => {
          console.log("Todas as tarefas na tabela tasks: ");
          for (let i = 0; i < resultSet.rows.length; i++) {
              const task = resultSet.rows.item(i);
              console.log(`Tarefa ${i + 1}:`, task);
          }
      },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error);
        }
      );
    }
  )
};
