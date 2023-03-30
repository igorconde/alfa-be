const postgresErrorMessages = {
  '23505': 'User with that email already exists',
  '23503': 'Foreign key violation',
  '23502': 'Not null violation',
  '23514': 'Check violation',
  '40001': 'Serialization failure',
  '57014': 'Query canceled',
  '57P01': 'Admin shutdown',
  '42703': 'Undefined column',
  '42701': 'Duplicate column',
  '22P02': 'Invalid text representation',
  '42601': 'Syntax error',
  '22023': 'Invalid parameter value',
};

export default postgresErrorMessages;
