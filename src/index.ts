/*
##########################################################################################################################
#                                                      TS-HOMERICO                                                       #
##########################################################################################################################
#                                                                                                                        #
#                                             Homerico Conexão (Decompilado)                                             #
#                                                    Author: Anthony                                                     #
#                                       ---------------- NodeJS ----------------                                         #
#                                                 * Under Development *                                                  #
#                                    https://github.com/anthony-freitas/ts-homerico                                      #
#                                                 Powered by homerico                                                    #
#                                                                                                                        #
##########################################################################################################################
#                                                     CONEXAO CORE                                                       #
##########################################################################################################################
*/

// Imports
import Acesso from './utils/acesso.js'
import Relatorio from './utils/relatorio.js'

/*
##########################################################################################################################
#                                                     CONEXAO CLASS                                                      #
##########################################################################################################################
*/

// Classe Homerico Conexao
export default class HomericoConexao {
  acesso: Acesso
  relatorio: Relatorio

  constructor () {
    this.acesso = new Acesso()
    this.relatorio = new Relatorio(this.acesso)
  }

  /*
  ##########################################################################################################################
  #                                                       ACESSO                                                           #
  ##########################################################################################################################
  */

  get validar() {
    return this.acesso.validar
  }

  get login() {
    return this.acesso.login
  }

  /*
  ##########################################################################################################################
  #                                                     RELATORIO                                                          #
  ##########################################################################################################################
  */

  get relatorioLista() {
    return this.relatorio.relatorioLista
  }

  get relatorioGerencialRegistro() {
    return this.relatorio.relatorioGerencialRegistro
  }

  get relatorioGerencialReport() {
    return this.relatorio.relatorioGerencialReport
  }

  get relatorioBoletim() {
    return this.relatorio.relatorioBoletim
  }

  get producaoLista() {
    return this.relatorio.producaoLista
  }

  get relatorioOv() {
    return this.relatorio.relatorioOv
  }

  get relatorioInterrupcoes() {
    return this.relatorio.relatorioInterrupcoes
  }
}

/*
##########################################################################################################################
#                                                         END                                                            #
##########################################################################################################################
*/
