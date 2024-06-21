export interface IProduto {
    identificador: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade:number



}
export const produtos: IProduto[] = [
    { identificador: 1, descricao: "Mouse gamer", preco:  439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-3.jpg",  quantidadeEstoque:13 },
    { identificador: 2, descricao: "Monitor ", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "/assets/monitor-1.jpg",  quantidadeEstoque:10 },
    { identificador: 3, descricao: "Teclado", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-1.jpg",  quantidadeEstoque:10 },
    { identificador: 4, descricao: "Headset gamer", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-2.jpg",  quantidadeEstoque:10 },
    { identificador: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-1.jpg" ,  quantidadeEstoque:10},
    { identificador: 6, descricao: "Fone de ouvido jbl", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-3.jpg" ,  quantidadeEstoque:10},
    { identificador: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/hd.jpg",  quantidadeEstoque:10 },
    { identificador: 8, descricao: "Combo de placa de vídeos", preco:  18449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/placa-video.jpg",  quantidadeEstoque:10 },
    { identificador: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "/assets/processador.jpg",  quantidadeEstoque:10 },
    { identificador: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-1.jpg" ,  quantidadeEstoque:10},
    { identificador: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "/assets/laptop-2.jpg",  quantidadeEstoque:10 },
    { identificador: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-1.png",  quantidadeEstoque:10 },
    { identificador: 13, descricao: "Mouse ótimo", preco:  200, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-2.jpg",  quantidadeEstoque:10 },
    { identificador: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-4.jpg",  quantidadeEstoque:10 },
    { identificador: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "/assets/teclado-2.jpg",  quantidadeEstoque:10 },
]