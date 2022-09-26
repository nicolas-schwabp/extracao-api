export interface IExtracao {
    id: number;
    titulo: string;
    descricao: string;
    status: string;
    dataSolicitacao: Date
    id_minerio: number;
    id_area: number;
}
