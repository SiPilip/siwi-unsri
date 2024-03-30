export default function useBeasiswa(data, beasiswaCount) {
  const { nama, lamastudi, ips, ipk, ...values } = data;
  const beasiswa = Object.values(values).slice(0, beasiswaCount).join(", ");
  const jenisBeasiswa = { nama, lamastudi, ips, ipk, beasiswa };
  // {nama: 'Dian Maheru', lamastudi: 3.5, ips: 3.88, ipk: 3.72, jenisBeasiswa: 'item1, item2, item3'}

  return { jenisBeasiswa };
}
