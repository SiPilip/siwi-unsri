export default function useBeasiswa(data, beasiswaCount) {
  const {
    nim,
    lamastudi,
    ips,
    ipk,
    semesterterakhir,
    totalbeasiswa,
    ...values
  } = data;
  const jenisbeasiswa = Object.values(values)
    .slice(0, beasiswaCount)
    .join(", ");
  const dataAkademik = {
    nim,
    lamastudi,
    ips,
    ipk,
    jenisbeasiswa,
    semesterterakhir,
    totalbeasiswa,
  };
  // {nama: 'Dian Maheru', lamastudi: 3.5, ips: 3.88, ipk: 3.72, jenisBeasiswa: 'item1, item2, item3'}

  return { dataAkademik };
}
