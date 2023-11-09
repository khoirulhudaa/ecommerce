const formatToRupiah = (angka: any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(angka);
  }

  export default formatToRupiah