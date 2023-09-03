"use client";
import MetaTitle from "@/components/MetaTitle";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCharacters } from "@/controller/api";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
};

const ContactsPage: React.FC = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadCharacters() {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
    }

    loadCharacters();
  }, []);

  const onCharacterClick = async (character: Character) => {
    router.push(`/contact/${character.id}`);
  };

  // Filter search
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Set the number of items per page
  const ITEMS_PER_PAGE = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the charecters for the current page
  const currentCharacters = filteredCharacters.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <MetaTitle
        title="Contact List"
        description="View our list of contacts with their related information."
      />

      <div className="my-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button
          className="px-3 py-1 ml-2 text-sm text-blue-600 hover:text-white rounded border hover:border-blue-800 border-blue-600
                       hover:bg-blue-800 cursor-pointer"
          onClick={clearSearch}
          disabled={!searchQuery}
        >
          Clear
        </button>
      </div>

      <Table
        data={currentCharacters}
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Status", accessor: "status" },
          { header: "Species", accessor: "species" },
          { header: "Gender", accessor: "gender" },
        ]}
        onRowClick={onCharacterClick}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ContactsPage;
