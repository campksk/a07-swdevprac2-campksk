import { TextField, Select, MenuItem } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center gap-10">
      <div className="text-3xl font-semibold">Venue Booking</div>

      <div className="w-[80%] max-w-3xl bg-slate-100 rounded-xl px-8 py-10 flex flex-col gap-y-6 shadow-sm border border-gray-200 mx-10">
        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          className="w-[90%] self-center"
        />

        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
          className="w-[90%] self-center"
        />

        <Select
          variant="standard"
          name="venue"
          id="venue"
          defaultValue="Bloom"
          className="w-[90%] self-center"
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>

        <div className="w-[90%] self-center [&>div]:w-full [&>div>div]:!p-0 [&_.MuiFormControl-root]:w-full [&_.MuiTextField-root]:w-full">
          <DateReserve />
        </div>

        <button
          name="Book Venue"
          className="rounded-lg bg-sky-600 hover:bg-sky-700 w-[50%] h-12 text-white shadow-md text-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-1 justify-self-center self-center"
        >
          Book Venue
        </button>
      </div>
    </main>
  );
}