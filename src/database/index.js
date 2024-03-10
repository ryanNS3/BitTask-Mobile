import * as SQLite from "expo-sqlite";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

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
                    prioridade INTEGER CHECK(prioridade IN (1, 2, 3)) NOT NULL,
                    status INTEGER CHECK(status IN (0, 1)) DEFAULT 0,
                    data_criacao DATETIME DEFAULT (DATETIME('now', 'localtime')),
                    data_entrega DATE
                );`, [],
                () => {
                  console.log("Tabela criada ou já existente!");
                },
                (error) => {
                  console.error("Erro ao criar tabela: ", error)
                }
            );
        }
    )
};


export const criarTarefa = (db, nome, descricao, categoria, prioridade, date) => {
  const data_entrega = dayjs(date).local().format().slice(0, 10);

  db.transaction(
    (tx) => {
      tx.executeSql(
        "INSERT INTO tasks (nome, descricao, categoria, prioridade, data_entrega) VALUES (?, ?, ?, ?, ?)",
        [nome, descricao, categoria, prioridade, data_entrega],
        () => {
          console.log("Tarefa adicionada com sucesso!"); 
        },
        (error) => {
          console.error("Erro ao criar tarefa: ", error)
        }
      );
    }
  )
};

export const verTodasTarefas = (db, callback) => {
  db.transaction(
    (tx) => {
        tx.executeSql("SELECT * FROM tasks", [], 
        (_, resultSet) => {
          const tarefas = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const task = resultSet.rows.item(i);
            tarefas.push(task);
          }
          callback(tarefas);
        },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error)
          callback([]);
        }
      );
    }
  )
};

export const verTarefa = (db, id, callback) => {
  db.transaction(
    (tx) => {
          tx.executeSql(
              "SELECT * FROM tasks WHERE id = ?",
              [id],
              (_, resultSet) => {
                  const task = resultSet.rows.item(0);
                  callback(task); // Chamando o callback com os dados da tarefa
                },
                (_, error) => {
                  console.log("Erro ao buscar tarefa: ", error);
                }
          );
        }
        );
      };
      
      export const verTarefasPorCategoria = (db, categoria) => {
        db.transaction(
          (tx) => {
            tx.executeSql("SELECT * FROM tasks WHERE categoria = ?", [categoria], 
            (_, resultSet) => {
              console.log("Todas as tarefas na tabela tasks: ");
              for (let i = 0; i < resultSet.rows.length; i++) {
                const task = resultSet.rows.item(i);
                console.log(`Tarefa ${i + 1}: `, task);
        }
      },
      (_, error) => {
        console.log("Erro ao buscar tarefas: ", error)
      }
      );
    }
    )
  };
  
  export const verTarefasStatus = (db, status, callback) => {
    db.transaction(
      (tx) => {
        tx.executeSql("SELECT * FROM tasks WHERE status = ?", [status], 
        (_, resultSet) => {
          const tarefas = [];
          console.log("Todas as tarefas na tabela tasks: ");
          for (let i = 0; i < resultSet.rows.length; i++) {
            const task = resultSet.rows.item(i);
            // console.log(`Tarefa ${i + 1}: `, task);
            tarefas.push(task);
          }
          callback(tarefas); // Chamando o callback com os dados da tarefa
      },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error)
        }
      );
    }
  )
};

export const atualizarStatus = (db, id, status) => {
  db.transaction(
    (tx) => {
        tx.executeSql(` UPDATE tasks
                        SET status = ?
                        WHERE id = ?`, [status, id], 
        (_, resultSet) => {
          const task = resultSet.rows.item(0);
          console.log(`Tarefa: `, task);
        },
        (_, error) => {
          console.log("Erro ao atualizar status: ", error)
        }
      );
    }
  )
};

export const tarefasHoje = (db, callback) => {
  db.transaction(
    (tx) => {
        tx.executeSql("SELECT * FROM tasks WHERE data_entrega = DATE('now', 'localtime')", [], 
        (_, resultSet) => {
          const tarefas = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
              const task = resultSet.rows.item(i);
              tarefas.push(task);
          }
          callback(tarefas);
        },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error)
          callback([])
        }
      );
    }
  )
};

export const tarefasPorPrioridade = (db, callback) => {
  db.transaction(
    (tx) => {
        tx.executeSql(`	SELECT * FROM tasks 
												ORDER BY prioridade DESC`, [], 
        (_, resultSet) => {
          const tarefas = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
              const task = resultSet.rows.item(i);
              tarefas.push(task);
          }
          callback(tarefas);
        },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error)
          callback([])
        }
      );
    }
  )
};

export const editarTarefa = (db, nome, descricao, categoria, prioridade, date, id) => {
  const data_entrega = dayjs(date).local().format().slice(0, 10);
  db.transaction(
    (tx) => {
      tx.executeSql(
        "UPDATE tasks SET nome = ?, descricao = ?, categoria = ?, prioridade = ?, data_entrega = ? WHERE id = ?",
        [nome, descricao, categoria, prioridade, data_entrega, id],
        () => {
          console.log("Tarefa adicionada com sucesso!"); 
        },
        (error) => {
          console.log("Erro ao criar tarefa: ", error)
        }
      );
    }
  )
};

export const excluirTarefa = (db, id) => {
  db.transaction(
    (tx) => {
        tx.executeSql("DELETE FROM tasks WHERE id = ?", [id], 
        (_, resultSet) => {
          console.log("Tarefa excluída com sucesso!")
        },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error)
        }
      );
    }
  )
};

export const pesquisarTarefas = (db, pesquisa, callback) => {
  db.transaction(
    (tx) => {
      tx.executeSql("SELECT * FROM tasks WHERE nome GLOB '?*'",
        [pesquisa],
        (_, resultSet) => {
          const tarefas = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
              const task = resultSet.rows.item(i);
              tarefas.push(task);
          }
          callback(tarefas)
        },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error)
          callback([]) 
        }
      );
    }
  )
}

export const estatistica = (db, pesquisa, callback) => {
  db.transaction(
    (tx) => {
      tx.executeSql("SELECT status, COUNT(status) as quantidade FROM tasks GROUP BY status",
        [pesquisa],
        (_, resultSet) => {
          const tarefas = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
              const task = resultSet.rows.item(i);
              tarefas.push(task);
          }
          callback(tarefas) 
        },
        (_, error) => {
          console.log("Erro ao buscar tarefas: ", error)
          callback([]) 
        }
      );
    }
  )
}