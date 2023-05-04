const postgresErrorMessages = {
  '23505': {
    code: 'PG-23505',
    message: 'Já existe um registro com essas informações.',
    docs: 'https://docs.example.com/errors/pg-23505',
  },
  '23503': {
    code: 'PG-23503',
    message: 'Este registro está sendo referenciado por outros registros e não pode ser apagado.',
    docs: 'https://docs.example.com/errors/pg-23503',
  },
  '23502': {
    code: 'PG-23502',
    message: 'Um campo obrigatório não foi preenchido.',
    docs: 'https://docs.example.com/errors/pg-23502',
  },
  '23514': {
    code: 'PG-23514',
    message: 'Uma condição de validação não foi atendida.',
    docs: 'https://docs.example.com/errors/pg-23514',
  },
  '40001': {
    code: 'PG-40001',
    message: 'Falha de serialização.',
    docs: 'https://docs.example.com/errors/pg-40001',
  },
  '57014': {
    code: 'PG-57014',
    message: 'A consulta foi cancelada.',
    docs: 'https://docs.example.com/errors/pg-57014',
  },
  '57P01': {
    code: 'PG-57P01',
    message: 'O servidor foi desligado pelo administrador.',
    docs: 'https://docs.example.com/errors/pg-57P01',
  },
  '42703': {
    code: 'PG-42703',
    message: 'Uma coluna que você tentou usar não existe.',
    docs: 'https://docs.example.com/errors/pg-42703',
  },
  '42701': {
    code: 'PG-42701',
    message: 'Uma coluna duplicada foi encontrada.',
    docs: 'https://docs.example.com/errors/pg-42701',
  },
  '22P02': {
    code: 'PG-22P02',
    message: 'O valor fornecido é inválido.',
    docs: 'https://docs.example.com/errors/pg-22P02',
  },
  '42601': {
    code: 'PG-42601',
    message: 'Houve um erro de sintaxe na consulta.',
    docs: 'https://docs.example.com/errors/pg-42601',
  },
  '22023': {
    code: 'PG-22023',
    message: 'O valor fornecido para um parâmetro é inválido.',
    docs: 'https://docs.example.com/errors/pg-22023',
  },
  '42710': {
    code: 'PG-42710',
    message: 'Uma coluna que você tentou adicionar já existe.',
    docs: 'https://docs.example.com/errors/pg-42710',
  },
  '42883': {
    code: 'PG-42883',
    message: 'A função que você tentou chamar não existe.',
    docs: 'https://docs.example.com/errors/pg-42883',
  },
  '42P01': {
    code: 'PG-42P01',
    message: 'A tabela que você tentou usar não existe.',
    docs: 'https://docs.example.com/errors/pg-42P01',
  },
  '42622': {
    code: 'PG-42622',
    message: 'O operador que você tentou usar não existe.',
    docs: 'https://docs.example.com/errors/pg-42622',
  },
  '22001': {
    code: 'PG-22001',
    message: 'O valor fornecido é muito longo.',
    docs: 'https://docs.example.com/errors/pg-22001',
  },
  '22003': {
    code: 'PG-22003',
    message: 'O valor fornecido é fora do intervalo permitido.',
    docs: 'https://docs.example.com/errors/pg-22003',
  },
  '22026': {
    code: 'PG-22026',
    message: 'A data fornecida é inválida.',
    docs: 'https://docs.example.com/errors/pg-22026',
  },
};

export default function getPostgresErrorMessage(errorCode) {
  const error = postgresErrorMessages[errorCode];
  if (error) {
    return `${error.code}: ${error.message} Consulte a documentação em ${error.docs}`;
  } else {
    return `Ocorreu um erro inesperado. Consulte a documentação em https://docs.example.com/errors`;
  }
}
