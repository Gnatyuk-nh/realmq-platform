const setPropertyIfDefined = require('./lib/set-property-if-defined');

/**
 * @typedef {Object} AccountModel
 * @params {string} id
 * @params {string} name
 * @params {string} email
 * @params {string} passwordHash
 * @param {string} tenantId
 * @param {Date} [createdAt]
 * @param {Date} [updatedAt]
 */

/**
 * @return {AccountModel}
 */
module.exports = ({
  id,
  name,
  email,
  passwordHash,
  tenantId,
  createdAt,
  updatedAt,
}) => {
  const account = {};

  setPropertyIfDefined(account, 'id', id);
  setPropertyIfDefined(account, 'name', name);
  setPropertyIfDefined(account, 'email', email);
  setPropertyIfDefined(account, 'passwordHash', passwordHash);
  setPropertyIfDefined(account, 'tenantId', tenantId);
  setPropertyIfDefined(account, 'createdAt', createdAt);
  setPropertyIfDefined(account, 'updatedAt', updatedAt);

  return account;
};
